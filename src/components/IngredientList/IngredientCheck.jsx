import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { buttonFinalizar } from '../../actions/actions';

class IngredientCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: [],
    };
    this.criaArray = this.criaArray.bind(this);
    this.juntaArray = this.juntaArray.bind(this);
    this.contador = this.contador.bind(this);
  }

  componentDidUpdate() {
    const checados = document.querySelectorAll('.checkbox');
    const { cont } = this.state;
    if (cont.length === checados.length) this.props.buttonFinalizar1();
    return null;
  }

  juntaArray = (arr1, arr2) => arr1.map((ing, i) => ing + ' ' + arr2[i]);

  criaArray = (lista, arr) => {
    return lista.map((ele, i) => {
      if (arr[ele] !== null) {
        return arr[ele];
      }
    });
  };

  contador = (event) => {
    let { cont } = this.state;
    event.target.checked
      ? cont.push(event.target.value)
      : (cont = cont.filter((ele) => ele !== event.target.value));
    // console.log('value', event.target.value);
    // console.log('event', event.target.checked);
    // console.log('cont', cont);
    // console.log('length', cont.length);
    return this.setState({ cont: cont });
  };

  render() {
    const { receita } = this.props;
    if (receita) {
      const ingredientes = Object.keys(receita).filter((e) => e.includes('Ingredient'));
      const quantidades = Object.keys(receita).filter((e) => e.includes('Measure'));
      const arr = this.juntaArray(
        this.criaArray(ingredientes, receita),
        this.criaArray(quantidades, receita)
      ).filter((ele) => ele.length > 1);
      console.log('arr', arr);
      return (
        <div>
          {arr.map((item, i) => {
            if (item !== '  ') {
              return (
                <label key={i} htmlFor={item}>
                  {item}
                  <input
                    className="checkbox"
                    name={item}
                    data-testid={`${i}-ingredient-step`}
                    type="checkbox"
                    value={item}
                    onClick={(event) => this.contador(event)}
                  />
                </label>
              );
            }
            return null;
          })}
        </div>
      );
    }
    return null;
  }
}

IngredientCheck.propTypes = {
  receita: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  buttonFinalizar1: () => dispatch(buttonFinalizar()),
});

export default connect(null, mapDispatchToProps)(IngredientCheck);
