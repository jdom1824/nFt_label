import fetch from 'node-fetch';
async function fetchData() {
    try {
        const response = await fetch('https://ico2.co/metadataVillamonica/villaModel.php?credit=0');
        if (response.ok) {
            const data = await response.json();
            console.log('Data fetched successfully:', data);
            return data;
        } else {
            throw new Error('Failed to fetch data: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

export default fetchData;
