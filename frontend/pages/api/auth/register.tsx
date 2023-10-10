export default async function handler(req:any, res:any) {
  try { 
    if (req.method === "POST"){
      const { email, username, password } = req.body;
      const url = `${process.env.SERVER_URL}/register`;
      
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          username: username,
          password: password
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      });

      if (response.status === 201) {
        res.status(201).json({ message: "User registered successfully."})
      } else {
        res.status(response.status).json(await response.json());
      }
    } else {
      res.status(405).json({ status: 405, message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ status: 500, message: "Internal server error" });
  }
};
