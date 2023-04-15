import './bootstrap';
import { createRoot } from 'react-dom/client';
import React from 'react';

const App = () => {
    const title: string = "サンプルページ";
    return <>
        <h1 className="text-red-400 text-4xl font-extrabold">{title}</h1>
    </>;
};
const container = document.getElementById('app') as HTMLInputElement;
const root = createRoot(container);
root.render(<App />);

export default App;