async function query(data) {
  const response = await fetch(
    'https://api-inference.huggingface.co/models/Phind/Phind-CodeLlama-34B-v1',
    {
      headers: {
        Authorization: 'Bearer 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',
      },
      method: 'POST',
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

query({ inputs: 'Can you please let us know more details about your ' }).then(
  (response) => {
    console.log(JSON.stringify(response));
  }
);

console.log(JSON.stringify(response));
