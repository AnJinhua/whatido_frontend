import { Cookies, useCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserProfile } from '../../store/actions/user_actions';
import { setUser } from '../../store/reducers/auth_reducer';
import { setEditableProfile } from '../../store/reducers/profile_reducer';
import { EditProfileFormContainer } from '../../styles/profile.styles';
import BigButton from '../utils/buttons/BigButton';
import InputField from '../utils/inputs/InputField';
import SelectCategory from '../utils/inputs/SelectCategory';
import SubCategorySelect from '../utils/inputs/SubCategorySelect';

function EditProfileForm() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.editableProfile);
  const [cookies] = useCookies(['user']);

  const cookie = new Cookies();
  const [{ token }] = useCookies(['token']);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: {
      fullName: `${cookies.user.firstName} ${cookies.user.lastName}`,
      headLine: cookies?.user?.userBio,
      nationality: cookies?.user?.nationality,
      currentLocation: cookies?.user?.currentLocation,
    },
  });

  const formatProfileData = async (data) => {
    const profileData = new FormData();
    profile?.cover?.file &&
      profileData.append('coverImage', profile?.cover?.file);
    profile?.avatar?.file &&
      profileData.append('avatar', profile?.avatar?.file);
    profileData.append('userBio', data?.headLine);
    profileData.append('community', JSON.stringify(profile?.community));
    profileData.append('experties', JSON.stringify(profile?.expertise));
    profileData.append('currentLocation', data?.currentLocation);
    profileData.append('nationality', data?.nationality);
    profileData.append(
      'additionalLinks',
      JSON.stringify(data?.additionalLinks)
    );

    const res = await toast.promise(
      updateUserProfile(cookies?.user?.slug, profileData, token),
      {
        pending: 'updating profile',
        success: 'profile updated successfully',
        error: 'error in profile update, try again!',
      }
    );

    const user = res.data.user_data;

    dispatch(
      setEditableProfile({
        cover: { url: user?.coverImage.cdnUrl, file: null },
        avatar: { url: user?.imageUrl?.cdnUrl, file: null },
        fullName: `${user?.firstName} ${user?.lastName}`,
        headline: user?.userBio,
        nationality: user?.nationality,
        currentLocation: user?.currentLocation,
        community: user?.community,
        expertise: user?.experties,
        additionalLinks: user?.additionalLinks,
      })
    );

    dispatch(setUser(user));
    const getNextYear = () => {
      let d = new Date();
      const year = d.getFullYear();
      const month = d.getMonth();
      const day = d.getDate();
      const nextYear = new Date(year + 1, month, day);

      return nextYear;
    };
    const expiringDate = getNextYear();
    cookie.set('user', user, {
      path: '/',
      secure: false,
      sameSite: 'Lax',
      expires: expiringDate,
    });
  };

  return (
    <EditProfileFormContainer>
      <div className="form-input-container">
        <InputField
          label={'full name'}
          type={'text'}
          error={errors?.fullName?.message}
          register={register('fullName')}
          placeholder={''}
          disabled
        />
        <InputField
          label={'bio'}
          type={'text'}
          error={errors?.headLine?.message}
          register={register('headLine')}
          placeholder={''}
        />
        <InputField
          label={'nationality'}
          type={'text'}
          error={errors?.nationality?.message}
          register={register('nationality')}
          placeholder={''}
        />
        <InputField
          label={'current location'}
          type={'text'}
          error={errors?.currentLocation?.message}
          register={register('currentLocation')}
          placeholder={''}
        />
        <SelectCategory
          setCategory={setEditableProfile}
          defaultValue={profile?.community}
          value={profile?.community}
        />
        <SubCategorySelect
          setCategory={setEditableProfile}
          defaultValue={profile?.expertise}
          value={profile?.expertise}
        />
      </div>
      {/* <AdditionalLink
        control={control}
        defaultValues={cookies?.user?.additionalLinks}
      /> */}
      <div className="submit-btn">
        <BigButton
          type="submit"
          eventHandler={handleSubmit((data) => {
            formatProfileData(data);
          })}
        >
          save changes
        </BigButton>
      </div>
    </EditProfileFormContainer>
  );
}

export default EditProfileForm;
