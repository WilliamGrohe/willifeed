
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quas nesciunt quod natus tempora iusto iste doloribus, blanditiis, a debitis, autem animi deleniti eum laborum. Totam nam quos voluptatibus non!</p>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur non at consectetur beatae maiores esse facilis. Eum, veritatis molestiae, dolore est eligendi quasi officia numquam aut hic reiciendis fuga harum!</p>
      </main>
    </div>
    </>
  )
}

export default App
