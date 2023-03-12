const Table = ({ feederData }) => {
  return (
    <table className="border-collapse w-max">
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th colSpan={2}>Hot</th>
        <th></th>
        <th colSpan={2}>Gnd</th>
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
      {feederData.map((current) => {
        const {
          AMPS,
          Number,
          Sets,
          conduitSize,
          groundSize,
          laborConduit,
          laborGND,
          laborHot,
          laborTotal,
          materialConduit,
          materialGND,
          materialHot,
          meterialTotal,
          wireSize,
        } = current.NG30RMC;
        return (
          <tbody>
            <tr>
              <th>30NG</th>
              <th>{AMPS}</th>
              <th>{conduitSize}</th>
              <th>(data)</th>
              <th>(data)</th>
              <th>1</th>
              <th>4</th>
              <th>#10</th>
              <th>(data)</th>
              <th>(data)</th>
              <th>#10</th>
              <th>(data)</th>
              <th>(data)</th>
              <th>(Math)</th>
              <th>(Math)</th>
              <th>(Math)</th>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default Table;
