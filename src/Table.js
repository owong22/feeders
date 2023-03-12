import { useEffect } from "react";

const Table = ({ feederData, feederNames }) => {
  return (
    <table className="border-collapse w-max">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th colSpan={2}>Conduits</th>
        <th></th>
        <th></th>
        <th></th>

        <th colSpan={2}>Hot Wires</th>
        <th></th>
        <th colSpan={2}>Gnd Wire</th>
        <th colSpan={2}>Subtotals/ft</th>
        <th></th>
      </tr>
      <tr>
        <th>Name</th>
        <th>AMPs</th>
        <th>Size</th>
        <th>Mat'l</th>
        <th>Labor</th>
        <th>Sets</th>
        <th>Number</th>
        <th>Size</th>
        <th>Mat'l</th>
        <th>Labor</th>
        <th>Size</th>
        <th>Mat'l</th>
        <th>Labor</th>
        <th>Mat'l</th>
        <th>Labor</th>
        <th>Total/ft</th>
      </tr>
      {/* {feederData.map((current, index) => {
        const {
          AMPS,
          number,
          sets,
          conduitSize,
          GNDSize,
          laborConduit,
          laborGND,
          laborHot,
          materialConduit,
          materialGND,
          materialHot,
          hotSize,
        } = current.Object.keys(current[index]);
        return (
          <tbody>
            <tr>
              <th>NG{AMPS}RMC</th>
              <th>{AMPS}</th>
              <th>{conduitSize}</th>
              <th>{materialConduit}</th>
              <th>{laborConduit}</th>
              <th>{sets}</th>
              <th>{number}</th>
              <th>{hotSize}</th>
              <th>{materialHot}</th>
              <th>{laborHot}</th>
              <th>{GNDSize}</th>
              <th>{materialGND}</th>
              <th>{laborGND}</th>
              <th>
                {(
                  sets *
                  (materialConduit +
                    (number * materialHot) / 100 +
                    materialGND / 100)
                ).toFixed(2)}
              </th>
              <th>
                {(
                  sets *
                  (laborConduit + (number * laborHot) / 100 + laborGND / 100)
                ).toFixed(2)}
              </th>
              <th>
                {(
                  sets *
                    (materialConduit +
                      (number * materialHot) / 100 +
                      materialGND / 100) +
                  sets *
                    (laborConduit + (number * laborHot) / 100 + laborGND / 100)
                ).toFixed(2)}
              </th>
            </tr>
          </tbody>
        );
      })} */}
    </table>
  );
};

export default Table;
