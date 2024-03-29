import { useState } from "react"
import { Link } from "react-router-dom"

const Index = (props) => {
     
    //state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
    });

    //handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createCheese(newForm);
        setNewForm({
            name: "",
            image: "",
            title: ""
        });
    }
    
    
    // loaded function
  const loaded = () => {
    return props.cheese.map((theCheese) => (
      <div key={theCheese._id} className="theCheese">
        <Link to={`/cheese/${theCheese._id}`}>
          <h1>{theCheese.name}</h1>
          </Link>
        <img src={theCheese.image} alt={theCheese.name} />
        <h3>{theCheese.title}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newForm.name}
        name="name"
        placeholder="name"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.image}
        name="image"
        placeholder="image URL"
        onChange={handleChange}
      />
      <input
        type="text"
        value={newForm.title}
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input type="submit" value="Create Cheese" />
    </form>
    {props.cheese ? loaded() : loading()}
  </section>
  );
}

export default Index