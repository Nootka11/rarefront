import React, { createRef, useRef, useState } from 'react'


// 1️⃣ Componente funcional con forwardRef
const Input = React.forwardRef((props,ref) => {
    return <input {...props} ref={ref} />
})
 
// 2️⃣ Componente de clase que enfoca si `focused === true`
class FocusableInput extends React.Component {
    inputRef = createRef();

    componentDidMount(){
        if(this.props.focused && this.inputRef.current){
            this.inputRef.current.focus();
        }
    }

    componentDidUpdate(prevProps) {
    if (!prevProps.focused && this.props.focused) {
      if (document.activeElement !== this.inputRef.current) {
        this.inputRef.current.focus();
      }
    }
  }

  render() {
    return (
      <Input
        ref={this.inputRef}
        placeholder={this.props.placeholder}
        className="border p-2 rounded my-2 border-fuchsia-400 
        focus:outline-none focus:bg-fuchsia-100 focus:border-fuchsia-600 focus:ring-4 focus:ring-orange-400"
      />
    );
  }
}

FocusableInput.defaultProps = {
  focused: false,
};

const TestDome02 = () => {
    // const inputRef = useRef();

    // //esta funcion ira al hijo a traves de ref
    // const handleFocus = () => {
    //     inputRef.current.focus();
    // }

    const [focusedField, setFocusedField] = useState("first");

  return (
    <div className='max-w-6xl mx-auto mt-6'>
        <h1>Test</h1>
        <section className="border my-6 p-6">
            <h2>Paso 1 Input Basico con props</h2>
            <FocusableInput focused={focusedField === "first"} placeholder='Primero'/><br />
            <FocusableInput focused={focusedField === "second"} placeholder='Segundo'/>
            {/* <Input ref={inputRef}
            placeholder="Escribe algo aquí..." type="email" name="correo" 
            className="my-6  px-6 rounded border border-slate-400"/> */}
            <br/>
            {/* <button className='py-2 px-4 bg-verde-calma-100 hover:bg-verde-calma-200 hover:shadow' onClick={handleFocus}>Focus</button> */}
                <div className="space-x-4">
          <button
            onClick={() => setFocusedField("first")}
            className="px-4 py-2 bg-sky-300 hover:bg-sky-400 rounded"
          >
            Focus Primero
          </button>
          <button
            onClick={() => setFocusedField("second")}
            className="px-4 py-2 bg-emerald-300 hover:bg-emerald-400 rounded"
          >
            Focus Segundo
          </button>
        </div>

        </section>

    </div>
  )
}

export default TestDome02