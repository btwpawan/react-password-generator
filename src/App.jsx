import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState("");

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-={}[]|:;<>,.?/~`";

  const generatePassword = () => {
    let charSet = "";
    if (includeUpper) charSet += upperChars;
    if (includeLower) charSet += lowerChars;
    if (includeNumber) charSet += numberChars;
    if (includeSymbol) charSet += symbolChars;

    if (charSet === "") {
      alert("Please select at least one option!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * charSet.length);
      newPassword += charSet[randIndex];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="container">
      <div className="card">
        <h2>🔐 Password Generator</h2>

        <label>Password Length:</label>
        <input
          type="number"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={() => setIncludeUpper(!includeUpper)}
            />
            Include Uppercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeLower}
              onChange={() => setIncludeLower(!includeLower)}
            />
            Include Lowercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumber}
              onChange={() => setIncludeNumber(!includeNumber)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSymbol}
              onChange={() => setIncludeSymbol(!includeSymbol)}
            />
            Include Symbols
          </label>
        </div>

        <button onClick={generatePassword}>Generate</button>

        {password && (
          <div className="output">
            <input
              type="text"
              readOnly
              value={password}
              placeholder="Generated Password"
            />
            <button style={{width:100, height:60}} onClick={copyToClipboard}>📋 Copy</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

//     import React, { useState } from 'react';

// const App = () => {
//   const [length, setLength] = useState(12);
//   const [includeUpper, setIncludeUpper] = useState(true);
//   const [includeLower, setIncludeLower] = useState(true);
//   const [includeNumber, setIncludeNumber] = useState(true);
//   const [includeSymbol, setIncludeSymbol] = useState(true);
//   const [password, setPassword] = useState('');

//   const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
//   const numberChars = '0123456789';
//   const symbolChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

//   const generatePassword = () => {
//     let charSet = '';
//     if (includeUpper) charSet += upperChars;
//     if (includeLower) charSet += lowerChars;
//     if (includeNumber) charSet += numberChars;
//     if (includeSymbol) charSet += symbolChars;

//     if (charSet === '') {
//       alert("Please select at least one option!");
//       return;
//     }

//     let newPassword = '';
//     for (let i = 0; i < length; i++) {
//       const randIndex = Math.floor(Math.random() * charSet.length);
//       newPassword += charSet[randIndex];
//     }
//     setPassword(newPassword);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(password);
//     alert("Password copied to clipboard!");
//   };

//   return (
//     <div style={styles.container}>
//       <h2>🔐 Random Password Generator</h2>

//       <div>
//         <label>Password Length: </label>
//         <input type="number" min="4" max="32" value={length} onChange={(e) => setLength(e.target.value)} />
//       </div>

//       <div>
//         <input type="checkbox" checked={includeUpper} onChange={() => setIncludeUpper(!includeUpper)} />
//         <label> Include Uppercase Letters</label>
//       </div>

//       <div>
//         <input type="checkbox" checked={includeLower} onChange={() => setIncludeLower(!includeLower)} />
//         <label> Include Lowercase Letters</label>
//       </div>

//       <div>
//         <input type="checkbox" checked={includeNumber} onChange={() => setIncludeNumber(!includeNumber)} />
//         <label> Include Numbers</label>
//       </div>

//       <div>
//         <input type="checkbox" checked={includeSymbol} onChange={() => setIncludeSymbol(!includeSymbol)} />
//         <label> Include Symbols</label>
//       </div>

//       <button onClick={generatePassword} style={styles.button}>Generate Password</button>

//       {password && (
//         <div>
//           <h3>🔑 Generated Password:</h3>
//           <input type="text" value={password} readOnly style={styles.passwordField} />
//           <button onClick={copyToClipboard} style={styles.copyButton}>📋 Copy</button>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     width: '400px',
//     margin: '50px auto',
//     padding: '20px',
//     borderRadius: '10px',
//     backgroundColor: '#1a1a2e',
//     color: '#fff',
//     fontFamily: 'Arial',
//     textAlign: 'left'
//   },
//   button: {
//     padding: '10px 20px',
//     marginTop: '10px',
//     backgroundColor: '#00adb5',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px'
//   },
//   passwordField: {
//     width: '100%',
//     padding: '10px',
//     marginTop: '10px',
//     fontSize: '16px'
//   },
//   copyButton: {
//     padding: '8px 16px',
//     marginTop: '10px',
//     backgroundColor: '#393e46',
//     color: '#fff',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '5px'
//   }
// };

// export default App;

// import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   //useRef hook
//   const passwordRef = useRef(null)

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (numberAllowed) str += "0123456789"
//     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

//     for (let i = 1; i <= length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass += str.charAt(char)

//     }

//     setPassword(pass)

//   }, [length, numberAllowed, charAllowed, setPassword])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     passwordRef.current?.setSelectionRange(0, 999);
//     window.navigator.clipboard.writeText(password)
//   }, [password])

//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])
//   return (

//     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
//       <h1 className='text-white text-center my-3'>Password generator</h1>
//     <div className="flex shadow rounded-lg overflow-hidden mb-4">
//         <input
//             type="text"
//             value={password}
//             className="outline-none w-full py-1 px-3"
//             placeholder="Password"
//             readOnly
//             ref={passwordRef}
//         />
//         <button
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>

//     </div>
//     <div className='flex text-sm gap-x-2'>
//       <div className='flex items-center gap-x-1'>
//         <input
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//          className='cursor-pointer'
//          onChange={(e) => {setLength(e.target.value)}}
//           />
//           <label>Length: {length}</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//       <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//       />
//       <label htmlFor="numberInput">Numbers</label>
//       </div>
//       <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//       </div>
//     </div>
// </div>

//   )
// }

// export default App
