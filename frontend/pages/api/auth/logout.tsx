export default async function handler(req:any, res:any) {
  try { 
    if (req.method === "POST"){
      const url = `${process.env.SERVER_URL}/logout`;
      
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
      });

      if (response.status === 200) {
        res.status(200).json({ message: "User logged out successfully."})
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
