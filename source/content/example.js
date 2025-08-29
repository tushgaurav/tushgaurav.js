import React, { useState, useEffect } from "react";
import { Static, Box, Text } from "ink";

const Test = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const run = (n) => {
      if (n <= 10) {
        setTests(previousTests => [
          ...previousTests,
          {
            id: `test-${n}`,
            title: `Test #${n}`
          }
        ]);

        setTimeout(() => run(n+1), 500);
      }
    };

    run(1);
  }, []);

  return (
    <>
      <Static items={tests}>
        {test => (
          <Box key={test.id}>
            <Text color="green">✔ {test.title}</Text>
          </Box>
        )}
      </Static>

      <Box marginTop={1}>
        <Text dimColor>Completed tests: {tests.length}</Text>
      </Box>
    </>
  );
};

export default Test;