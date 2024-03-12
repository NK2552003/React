function Card({ title, content,body}) {
  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{body}</p>
    </div>
  );
}

export default Card;
