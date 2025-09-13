import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  // стан (дефолт — Jam)
  const [selectedGood, setSelectedGood] = useState('Jam');

  // обробники
  const handleSelect = good => setSelectedGood(good);
  const clear = () => setSelectedGood('');

  // заголовок
  const titleText = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {titleText}

        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={clear}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = good === selectedGood;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {!isSelected && (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => handleSelect(good)}
                    >
                      +
                    </button>
                  )}

                  {isSelected && (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={clear}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
