import React, { useState } from "react";
import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }
    setIsLoading(true);

    try {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate generating a fake image URL based on prompt (replace with real API call)
      const fakeImageUrl = `https://source.unsplash.com/400x300/?${encodeURIComponent(
        prompt
      )}`;

      // Save generated image and prompt
      setGeneratedImages((prev) => [
        ...prev,
        { imageUrl: fakeImageUrl, prompt },
      ]);

      setImageUrl(fakeImageUrl);
    } catch (error) {
      console.error("Failed to generate image:", error);
      alert("Failed to generate image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-2">Image Generation App</h1>
        <p className="text-lg text-gray-700 mb-4">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter your prompt here..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            onClick={handleGenerateImage}
            disabled={isLoading}
            className={`w-full p-3 rounded-lg text-white transition duration-200 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Loading..." : "Generate Image"}
          </button>
        </div>

        {/* Display the latest generated image */}
        {imageUrl && (
          <ImageCard
            action={(path) => setImageUrl(path)}
            imageUrl={imageUrl}
            prompt={prompt}
          />
        )}

        {/* Optional: display a gallery of all generated images */}
        {generatedImages.length > 1 && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {generatedImages.map(({ imageUrl, prompt }, index) => (
              <ImageCard
                key={index}
                imageUrl={imageUrl}
                prompt={prompt}
                action={(path) => setImageUrl(path)}
                width="sm"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;


