import { Skeleton, Box } from '@mantine/core'

export const CustomLoader = () => {
  return (
    <Box
      style={{
        backgroundColor: '#f0f0f0',
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2.5,
        height: '100%',
        borderRadius: '10px',
      }}
    >
      {[20, 6.5, 13, 6.5, 20].map((height, index) => (
        <Skeleton key={index} height={height} width={2.5} radius="sm" animate style={{ flexShrink: 0 }} />
      ))}
    </Box>
  )
}
