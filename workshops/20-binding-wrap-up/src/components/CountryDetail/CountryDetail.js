// CountryDetail.js - show details of a specific country
import React, {Component} from 'react'

// A pure presentational component
class CountryDetail extends Component {

    render() {
        const country = this.props.country;
        return (
            <div>
                <h2>CountryDetail</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        id: {country.id}
                    </li>
                    <li className="list-group-item">
                        name: {country.name}
                    </li>
                    <li className="list-group-item">
                        capital: {country.capital}
                    </li>
                    <li className="list-group-item">
                        details: {country.details}
                    </li>
                    <li className="list-group-item">
                        <img
                            className="img-fluid"
                            src={require('../../img/countries/' + country.img)} alt={country.name}/>
                    </li>
                    <li className="list-group-item">
                        {/*Like a Vue Computed Property...*/}
                        {country.cost > 4000
                            ? <span className="badge badge-warning">Expensive!</span>
                            : ''
                        }
                        {country.cost < 1000
                            ? <span className="badge badge-warning">on sale!</span>
                            : ''
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

export default CountryDetail