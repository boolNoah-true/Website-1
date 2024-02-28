//import './Project1.css';

function App() {
    const [color, setColor] = React.useState('black');

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const red = Math.round((clientX / window.innerWidth) * 255);
        const blue = Math.round((clientY / window.innerHeight) * 255);
        const newColor = `rgb(${red}, 0, ${blue})`; // Using modulo for green to keep the value low
        setColor(newColor);
    };

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <h1 className = "title" style={{ color: color }}>
            Website
        </h1>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

