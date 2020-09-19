import React from 'react';

import './styles.scss';

const mocked = {
  details:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit molestiae molestias incidunt veritatis at debitis neque quibusdam voluptatum error, deserunt cumque distinctio assumenda totam? Error aspernatur, ab eos aut doloribus hic est voluptates fuga debitis accusamus voluptas similique quibusdam recusandae aliquam illum alias nisi, voluptatibus praesentium et rem vel modi, asperiores repudiandae. Fugit tenetur nam molestiae inventore eum rerum sequi harum facere iusto ut necessitatibus cupiditate quasi, vel repudiandae accusamus quisquam exercitationem corrupti cum itaque. In tenetur dolorem delectus doloremque nam, voluptatum iusto fugiat quaerat cupiditate repellendus facilis repellat, recusandae nemo quas reiciendis. Perspiciatis nemo asperiores nobis sequi similique accusamus?',
};

export const MissionDetails: React.FC = () => {
  return (
    <div className='mission-details'>
      <p className='mission-details-content'>{mocked.details}</p>
    </div>
  );
};
