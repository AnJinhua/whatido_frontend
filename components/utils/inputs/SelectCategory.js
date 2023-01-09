import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import { SelectFieldContainer } from '../../../styles/utils.styles';
import { TextBase } from '../typography/Typography';

function SelectCategory({ setCategory, defaultValue, value }) {
  const dispatch = useDispatch();
  const { data } = useSWR(`${API_URL}/getExpertsCategoryList`);
  const [categoryList, setCategoryList] = useState([]);

  const flattenedCommunityList = categoryList?.reduce((list, curr) => {
    list.push({
      value: curr.slug,
      label: curr.name,
    });

    return list;
  }, []);

  useEffect(() => {
    if (data) setCategoryList(data);
  }, [data]);

  return (
    <SelectFieldContainer>
      <TextBase>community</TextBase>

      <Select
        defaultValue={defaultValue}
        value={value}
        isClearable={false}
        isSearchable={true}
        name="community"
        options={flattenedCommunityList}
        placeholder="select community"
        onChange={(value) =>
          dispatch(
            setCategory({
              community: value,
            })
          )
        }
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
            primary: '#001433',
            neutral30: '#001433',
          },
        })}
      />
    </SelectFieldContainer>
  );
}

export default SelectCategory;
