import Link from 'next/link';
import useSWR from 'swr';
import { API_URL } from '../../../constants/api';
import BaseAvatar from '../avatars/BaseAvatar';
import { TextLG } from '../typography/Typography';

function MessageHeaderUser({ recieverSlug }) {
  const endUserserUrl = `${API_URL}/getExpertDetail/${recieverSlug}`;
  const { data: endUser } = useSWR(endUserserUrl, { suspense: true });
  const expert = endUser?.data;
  return (
    <Link href={`/explore/expert/${expert?.slug}`}>
      <div className="flex-center xs-gap">
        <BaseAvatar src={expert?.imageUrl?.cdnUrl} />
        <TextLG
          style={{
            cursor: 'pointer',
          }}
          className="info-name"
        >
          {expert?.profile?.firstName + '  ' + expert?.profile?.lastName}
        </TextLG>
        {/* <div className="info"></div> */}
      </div>
    </Link>
  );
}

export default MessageHeaderUser;
