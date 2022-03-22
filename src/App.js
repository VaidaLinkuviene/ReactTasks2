
import LessText from './components/LessText';


function App() {

  let data = [{
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia alias et nulla? Blanditiis quibusdam dolore corrupti fuga quisquam praesentium quod dolor, et ea, voluptatem aut quia quam doloremque nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia alias et nulla? Blanditiis quibusdam dolore corrupti fuga quisquam praesentium quod dolor, et ea, voluptatem aut quia quam doloremque nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio mollitia alias et nulla? Blanditiis quibusdam dolore corrupti fuga quisquam praesentium quod dolor, et ea, voluptatem aut quia quam doloremque nisi."
  },

  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora explicabo, quas maxime quaerat tenetur voluptatibus placeat? Expedita, cumque tenetur voluptatibus ipsa facere iste quasi. Deleniti possimus facilis similique illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora explicabo, quas maxime quaerat tenetur voluptatibus placeat? Expedita, cumque tenetur voluptatibus ipsa facere iste quasi. Deleniti possimus facilis similique illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora explicabo, quas maxime quaerat tenetur voluptatibus placeat? Expedita, cumque tenetur voluptatibus ipsa facere iste quasi. Deleniti possimus facilis similique illo."
  }
  ]


  return (
    <div>

      <LessText tekstas={data[0].text} length={35} />

      <LessText tekstas={data[1].text} length={50} />

    </div>


  );
}

export default App;
