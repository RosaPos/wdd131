(() => {
    const KEY_COUNT = "3dxd_quote_count";
    const KEY_LIST = "3dxd_quote_requests";

    const params = new URLSearchParams(window.location.search);

    // Get values (fallback to "—" if missing)
    const get = (name) => (params.get(name) || "").trim();

    const data = {
        name: get("name"),
        email: get("email"),
        phone: get("phone"),
        product: get("product"),
        qty: get("qty"),
        needby: get("needby"),
        details: get("details")
    };

    // Collect checkboxes: name="options" can appear multiple times
    const options = params.getAll("options").map(v => v.trim()).filter(Boolean);

    // ----- localStorage: count -----
    const currentCount = Number(localStorage.getItem(KEY_COUNT) || "0");
    const newCount = currentCount + 1;
    localStorage.setItem(KEY_COUNT, String(newCount));

    const countEl = document.querySelector("#quoteCount");
    if (countEl) countEl.textContent = String(newCount);

    // ----- localStorage: store request list (array) -----
    const saved = localStorage.getItem(KEY_LIST);
    const list = saved ? JSON.parse(saved) : [];
    list.push({
        ...data,
        options,
        submittedAt: new Date().toISOString()
    });
    localStorage.setItem(KEY_LIST, JSON.stringify(list));

    // ----- Render summary using template literals -----
    const clean = (value) => (value && value.length ? value : "—");
    const optionsText = options.length ? options.join(", ") : "—";

    const summaryHTML = `
    <ul style="margin:.5rem 0 0; padding-left:1.1rem;">
      <li><strong>Product:</strong> ${clean(data.product)}</li>
      <li><strong>Quantity:</strong> ${clean(data.qty)}</li>
      <li><strong>Needed by:</strong> ${clean(data.needby)}</li>
      <li><strong>Colors / details:</strong> ${clean(data.details)}</li>
      <li><strong>Extras:</strong> ${optionsText}</li>
      <li><strong>Email:</strong> ${clean(data.email)}</li>
      <li><strong>Name:</strong> ${clean(data.name)}</li>
      <li><strong>WhatsApp:</strong> ${clean(data.phone)}</li>
    </ul>
  `;

    const summaryEl = document.querySelector("#summary");
    if (summaryEl) summaryEl.innerHTML = summaryHTML;
})();