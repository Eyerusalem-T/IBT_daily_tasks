    async function getUsdToEtb() {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      if (!res.ok) {
        throw new Error("Failed to fetch rate");
      }
      const data = await res.json();
      return data.rates.ETB;
    }
    getUsdToEtb().then((rate) => console.log("Task 1 - USD to ETB:", rate));


    // Task 2: Rewrite .then Chain to Async/Await
    async function loadAndRenderPost() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Task 2 - Rendered Post:", data.title);
      } catch (error) {
        console.error("Task 2 Error:", error.message);
      }
    }
    loadAndRenderPost();


    // Task 3: Network Error vs HTTP 404
    async function testErrors() {
      try {
        await fetch("https://this-domain-does-not-exist-12345.com");
      } catch (error) {
        console.log("Task 3 - Network Error Caught:", error.message);
      }

      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/999999");
        if (!res.ok) {
          throw new Error("Resource not found (404)");
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log("Task 3 - 404 Error Caught via res.ok:", error.message);
      }
    }
    testErrors();


    // Task 4: Fetch List and Details with Promise.all
    async function fetchTopTwoItems() {
      try {
        const listRes = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2");
        const listData = await listRes.json();

        const url1 = listData.results[0].url;
        const url2 = listData.results[1].url;

        const [res1, res2] = await Promise.all([
          fetch(url1),
          fetch(url2)
        ]);

        const [data1, data2] = await Promise.all([
          res1.json(),
          res2.json()
        ]);

        console.log("Task 4 - Item 1:", data1.name);
        console.log("Task 4 - Item 2:", data2.name);
      } catch (error) {
        console.error("Task 4 Error:", error.message);
      }
    }
    fetchTopTwoItems();


    // Task 5: Page UI with Loading, Success, and Error States
    const statusDiv = document.getElementById("status");
    const contentDiv = document.getElementById("content");

    async function loadData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!res.ok) {
          throw new Error("HTTP error " + res.status);
        }
        const data = await res.json();
        statusDiv.textContent = "";
        contentDiv.textContent = "Data: " + data.title;
      } catch (error) {
        statusDiv.textContent = "Error: " + error.message;
        contentDiv.textContent = "";
      }
    }
    loadData();
