import { Component } from "react";
import { USERAPI } from "../../api";
import './style.css';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      load: true,
      error: null,
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  async loadUsers() {

    try {

      const apiResponse = await fetch(USERAPI + "/?results=10");

      if (!apiResponse.ok) {
        throw new Error('Erro de resposta!');
      }

      const json = await apiResponse.json();
      this.setState({ users: json.results });
      console.log(this.state.users);

    } catch (e) {
      this.setState = { error: e };
    } finally {
      this.setState({ load: false });
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.load ?
            <p>Loading...</p>
            :
            this.state.error ?
              <p>Erro: {this.error.message}</p>
              :
              <div className="card-box">
                {
                  this.state.users.map((item) => (
                    <div className="card" key={item.id}>
                      <div className="card-photo">
                        <img className="image"
                          src={item.picture.large} />
                      </div>
                      <div className="card-item name">
                        <p>{item.name.title}.
                          {item.name.last.toUpperCase()} {item.name.first}</p>
                      </div>
                      <div className="card-item mail">
                        <p>{item.dob.age} anos</p>
                      </div>
                      <div className="card-item">
                        <p>{item.location.state}
                          ({item.location.country})</p>
                      </div>
                      <div className="card-item">
                        <p>{item.location.street.name},
                          {item.location.street.number},
                          </p>
                      </div>
                      
                    </div>
                  ))
                }
              </div>
        }
      </div>

    );
  }

}