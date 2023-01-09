import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { SelectFieldContainer } from '../../../styles/utils.styles';
import { TextBase } from '../typography/Typography';

const animatedComponents = makeAnimated();

function SubCategorySelect({ setCategory, defaultValue, value }) {
  const dispatch = useDispatch();
  const { data } = useSWR(`${API_URL}/getExpertsCategoryList`);

  const [categoryList, setCategoryList] = useState([]);

  const flattenedExpertiseList = categoryList?.reduce((list, curr) => {
    curr.subcategories.forEach((cat) => {
      list.push({
        value: cat.slug,
        label: cat.name,
      });
    });

    return list;
  }, []);

  useEffect(() => {
    if (data) setCategoryList(data);
  }, [data]);

  return (
    <SelectFieldContainer>
      <TextBase>experties</TextBase>

      <Select
        defaultValue={defaultValue}
        value={value}
        isMulti
        closeMenuOnSelect={false}
        components={animatedComponents}
        isClearable={false}
        isSearchable={true}
        name="expertise"
        placeholder="select expertise"
        onChange={(value) => {
          if (value.length > 5) return;
          dispatch(
            setCategory({
              expertise: value,
            })
          );
        }}
        options={flattenedExpertiseList}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: '#f3f3f3',
            borderColor: state.isFocused ? '#f3f3f3' : '#f3f3f3',
            padding: '0.25rem 0.5rem',
          }),
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: '0.5rem',
          colors: {
            ...theme.colors,
            primary25: '#f3f3f3',
            primary: '#f3f3f3',
            neutral30: '#001433',
          },
        })}
      />
    </SelectFieldContainer>
  );
}

export default SubCategorySelect;
