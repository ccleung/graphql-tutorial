const channels = [
  {
    id: 1,
    name: 'soccer',
  },
  {
    id: 2,
    name: 'baseballe',
  }
]

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    }
  }
}