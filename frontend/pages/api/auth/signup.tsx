export default async function handler(req:any, res:any) {
  try { 
    if (req.method === "POST"){
      const { email, username, password } = req.body;
      const url = "http://localhost:10000/register";
      
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password
        }),
      });

      if (response.status === 201) {
        const data = await response.json();
        res.status(201).json({ message: "User registered successfully.", data: data })
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
