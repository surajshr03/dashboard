'use client';
import { useRouter } from 'next/navigation';

const UserDetails = () =>{
  const router = useRouter();
//   const { device_id } = router.query;

  return (
    <div>
      <h1>User Details</h1>
      {/* <p>Device ID: {device_id}</p> */}
      {/* Display more user details here */}
    </div>
  );
}

export default UserDetails;

