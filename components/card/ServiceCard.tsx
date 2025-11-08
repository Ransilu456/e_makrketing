export default function ServiceCard() {
  return (
    <div className="w-[400px] h-[500px] bg-black/5 flex flex-col justify-between items-center p-8 mb-6">
      
      <div className="flex flex-col items-center justify-center">
        <h1 className="bg-secondary-text text-4xl mb-6">Tittle</h1>
        <p className="mb-6 mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore asperiores,
          cumque quidem vel placeat maxime architecto aspernatur labore velit reprehenderit
          sapiente numquam quas cum est voluptatem laboriosam excepturi in ut repudiandae
          laborum. Nesciunt sint odit id iusto vero quis aut.
        </p>
      </div>

      <button className="btn-outline py-2 px-4 mt-auto">Read More</button>
    </div>
  );
}
