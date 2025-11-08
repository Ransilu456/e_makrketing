export default function ServiceCard(){
    return(
        <div className="w-[400px] h-[500px] bg-black/5 flex flex-col items-center align-baseline justify-baseline p-8 mb-6">
            <h1 className="bg-secondary-text text-4xl mb-6">Tittle</h1>
            <p className="mb-6 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore asperiores, cumque quidem vel placeat maxime architecto aspernatur labore velit reprehenderit sapiente numquam quas cum est voluptatem laboriosam excepturi in ut repudiandae laborum. Nesciunt sint odit id iusto vero quis aut.</p>
            <button className="absolute mt-6 btn-outline py-2 px-4 bottom-50">Read More</button>
        </div>
    );
}