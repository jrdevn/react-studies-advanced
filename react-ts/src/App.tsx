import React, { createContext } from 'react';
// importacao de components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import DestructuringComponent from './components/DestructuringComponent';
import StateComponent from './components/StateComponent';
import { Category } from './components/DestructuringComponent';
import Context from './components/Context';


// variaveis
const name: string = "Jhonata";
const age: number = 30;
const isWorking: boolean = true;

// funcoes
const userGreeting = (name: string): string => {
  return `Olá ${name}`
}

// type

type textOrNull = string | null

const myText: textOrNull = "Tem algum texto aqui!";
let mySecondText: textOrNull = null;
// mySecondText = "teste"


// type valorFixo
type valorFixo = "Isso" | "Aquilo" | "Outro"

const objvalorFixo: valorFixo = "Isso" // só aceita os types da variavel

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

//9 - context
const contextValue: IAppContext = {
  language: "Javascript",
  framework: "Express",
  projects: 5,
};


function App() {
  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript with React</h1>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>{isWorking ? <p> Está trabalhando </p> : <p> Não tá kk</p>}</p>
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <DestructuringComponent
          title="Meu primeiro post"
          content="Conteúdo"
          commentQuantity={10}
          tags={["javascript", "c#"]}
          category={Category.JS} />

        <DestructuringComponent
          title="Outro post"
          content="Conteúdo 2"
          commentQuantity={20}
          tags={["python", "java"]}
          category={Category.PY} />
        {/* useState */}
        <StateComponent />
        {myText &&
          <p>Tem texto na variavel</p>
        }
        {mySecondText &&
          <p>Tem texto na variavel</p>
        }
      </div>
      <Context/> 
    </AppContext.Provider>

  );
}

export default App;
