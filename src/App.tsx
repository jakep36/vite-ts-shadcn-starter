import { useState } from 'react';
import { Button } from '@/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello from Tailwind</h1>

      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Button className="bg-red-500" variant="destructive">
          Click Me!
        </Button>
      </div>
    </>
  );
}

export default App;