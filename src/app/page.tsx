import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 p-8 text-white">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Download Our Apps</h1>
        <p className="text-xl mb-12">Get access to our amazing mobile applications!</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <AppDownloadCard 
            title="PassTrack"
            description="Get your ticket online & ride safely"
            imageSrc="/passtrack-icon.png"
            apkUrl="https://drive.google.com/file/d/1hj1kXsV4srALkHXmgi1KHLFSQd8Fcwhj/view?usp=drive_link"
          />
          <AppDownloadCard 
            title="Dashboard"
            description="Monitor buses, route & crowd on-the-go"
            imageSrc="/dashboard-icon.png"
            apkUrl="https://drive.google.com/file/d/1oVT6bhJOZF-WV8XY9OZ4ODzh2GFfD6V7/view?usp=drive_link"
          />
        </div>
      </div>
    </main>
  );
}

interface AppDownloadCardProps {
  title: string;
  description: string;
  imageSrc: string;
  apkUrl: string;
}

function AppDownloadCard({ title, description, imageSrc, apkUrl }: AppDownloadCardProps) {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full md:w-64 flex flex-col items-center">
      <Image src={imageSrc} alt={`${title} icon`} width={80} height={80} className="mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      
        href={apkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      <a>
        Download APK
      </a>
    </div>
  );
}