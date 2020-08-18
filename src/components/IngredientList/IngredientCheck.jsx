import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { buttonFinalizar } from '../../actions/actions';

class IngredientCheck extends React.Component {
  static juntaArray(arr1, arr2) {
    return arr1.filter((e) => e !== null).map((ing, i) => `${ing} ${arr2[i]}`);
  }

  static criaArray(lista, arr) {
    return lista.map((ele) => {
      if (arr[ele] !== null || arr[ele] !== '') {
        return arr[ele];
      }
      return null;
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      cont: [],
    };
    this.contador = this.contador.bind(this);
  }

  componentDidUpdate() {
    const checados = document.querySelectorAll('.checkbox');
    const { cont } = this.state;
    if (cont.length === checados.length) this.props.buttonFinalizar1();
    return null;
  }

  contador(event) {
    let { cont } = this.state;
    if (event.target.checked) {
      cont.push(event.target.value);
    } else cont = cont.filter((ele) => ele !== event.target.value);
    return this.setState({ cont });
  }

  render() {
    const { receita } = this.props;
    if (receita) {
      const ingredientes = Object.keys(receita).filter((e) => e.includes('Ingredient'));
      const quantidades = Object.keys(receita).filter((e) => e.includes('Measure'));
      const arr = IngredientCheck.juntaArray(
        IngredientCheck.criaArray(ingredientes, receita),
        IngredientCheck.criaArray(quantidades, receita),
      ).filter((ele) => ele.length > 1);
      console.log('null', IngredientCheck.criaArray(ingredientes, receita));
      console.log('arr', arr);
      return (
        <div>
          {arr.map((item, i) => {
            if (item.length > 1) {
              return (
                <label htmlFor={item}>
                  {item}
                  <input
                    className="checkbox"
                    name={item}
                    data-testid={`${i}-ingredient-step`}
                    type="checkbox"
                    value={item}
                    // style={checked ? { textDecoration: 'line-through' } : 'none'}
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
  buttonFinalizar1: PropTypes.func.isRequired,
  receita: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  buttonFinalizar1: () => dispatch(buttonFinalizar()),
});

export default connect(null, mapDispatchToProps)(IngredientCheck);
