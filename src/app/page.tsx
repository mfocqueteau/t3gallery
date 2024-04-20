export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/122fd808-e3cf-4550-a094-bc590990464b-12mlt5.jpg",
    "https://utfs.io/f/2e093295-5887-4aeb-99ab-f50577c705af-12mlt6.jpg",
    "https://utfs.io/f/af361213-2d6f-4613-9d66-80f455a1636b-12mlt7.jpg",
    "https://utfs.io/f/908cd997-8f26-4b12-8f64-00940b4415ea-12mlt8.webp",
    "https://utfs.io/f/122fd808-e3cf-4550-a094-bc590990464b-12mlt5.jpg",
    "https://utfs.io/f/2e093295-5887-4aeb-99ab-f50577c705af-12mlt6.jpg",
    "https://utfs.io/f/af361213-2d6f-4613-9d66-80f455a1636b-12mlt7.jpg",
    "https://utfs.io/f/908cd997-8f26-4b12-8f64-00940b4415ea-12mlt8.webp",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
