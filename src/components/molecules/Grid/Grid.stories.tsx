import type { Meta } from '@storybook/react';

import { Grid } from '.';

const meta = {
  title: 'Molecules/Grid',
  component: Grid
} satisfies Meta<typeof Grid>;

export default meta;

export const List = {
  args: {
    listImages: [
      {
        breeds: [
          {
            weight: {
              imperial: '50 - 70',
              metric: '23 - 32'
            },
            height: {
              imperial: '22 - 24.5',
              metric: '56 - 62'
            },
            id: 177,
            name: 'Dutch Shepherd',
            bred_for: 'Farms, watchdog, guard duty',
            life_span: '15 years',
            temperament:
              'Reliable, Affectionate, Alert, Loyal, Obedient, Trainable',
            reference_image_id: 'BkE6Wg5E7'
          }
        ],

        id: 'BkE6Wg5E7',
        url: 'http://via.placeholder.com/640x360',
        width: 856,
        height: 511
      },
      {
        breeds: [
          {
            weight: {
              imperial: '50 - 70',
              metric: '23 - 32'
            },
            height: {
              imperial: '22 - 24.5',
              metric: '56 - 62'
            },
            id: 177,
            name: 'Dutch Shepherd',
            bred_for: 'Farms, watchdog, guard duty',
            life_span: '15 years',
            temperament:
              'Reliable, Affectionate, Alert, Loyal, Obedient, Trainable',
            reference_image_id: 'BkE6Wg5E7'
          }
        ],

        id: 'BkE6Wg577',
        url: 'http://via.placeholder.com/640x360',
        width: 856,
        height: 511
      },
      {
        breeds: [
          {
            weight: {
              imperial: '14',
              metric: '6'
            },
            height: {
              imperial: '6 - 9',
              metric: '15 - 23'
            },
            id: 2,
            name: 'Pekingese',
            bred_for: 'Lapdog',
            breed_group: 'Toy',
            life_span: '14 - 18 years',
            temperament:
              'Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent',
            reference_image_id: 'ByIiml9Nm'
          }
        ],
        id: 'ByIiml9Nm',
        url: 'http://via.placeholder.com/640x360',
        width: 960,
        height: 640
      }
    ]
  }
};
