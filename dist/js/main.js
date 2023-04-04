const getScadfile = async () => {
    const url = "/.netlify/functions/app";
    const fileStream = await fetch(url);
    const fileJson = await fileStream.json();
}