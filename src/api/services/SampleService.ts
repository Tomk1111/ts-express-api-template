export interface SampleData {
    id: number;
    name: string;
}

async function sampleService(): Promise<SampleData[]> {
    try {
        // Simulating fetching data, replace with actual logic (e.g., database call, API request)
        const data: SampleData[] = [
            { id: 1, name: "Sample Item 1" },
            { id: 2, name: "Sample Item 2" },
        ];
        
        // Return the fetched data
        return data;
    } catch (error) {
        // Log the error and rethrow it for centralized error handling
        console.error("Error in sampleService:", error);
        throw new Error("Failed to fetch sample data"); // Custom error message
    }
}

export default sampleService;

