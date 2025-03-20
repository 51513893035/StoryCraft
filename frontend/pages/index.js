import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Head>
        <title>StoryCraft - AI Writing Assistant</title>
      </Head>
      <h1 className="text-4xl font-bold">Welcome to StoryCraft</h1>
      <p className="text-lg mt-4">Your AI-powered story-writing companion.</p>
    </div>
  );
}
