const handler = async (req, res) => {
  const data = await fetch(
    "https://dev.to/api/articles?state=rising&per_page=4"
  );
  const blog = await data.json();
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.status(200).json(blog);
};
export default handler;
