import { SelectTabContainer } from '../../styles/profile.styles';

function SelectTab({ Icon, selected, handleClick }) {
  return (
    <SelectTabContainer selected={selected} onClick={handleClick}>
      <div className="feed-icon">
        <Icon selected={selected} />
        {/* <div className="text">
          <TextxS>{count}</TextxS>
        </div> */}
      </div>
    </SelectTabContainer>
  );
}

export default SelectTab;
