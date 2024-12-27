import React from 'react'
import Image from 'next/image'
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'
import services from './services.jpg'
import services2 from './services2.jpg'
import services3 from './services3.jpg'
import theme from '../ThemeRegistry/theme'

interface ourServicesProps {
  sx?: object
}

export const OurServices = (props: ourServicesProps): React.JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
        sx={{
          paddingTop: '40px',
          paddingBottom: '40px',
          [theme.breakpoints.up('md')]: {
            paddingTop: '80px',
            paddingBottom: '80px'
          }
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '30px',
            [theme.breakpoints.up('md')]: {
              marginBottom: '60px'
            }
          }}
          variant={'h2'}
          fontWeight={theme.typography.fontWeightBold}
        >
          <Box
            sx={{
              color: theme.palette.primary.main
            }}
            component={'span'}
          > Dịch vụ của chúng tôi
          </Box>
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%'
                  }}
                  priority={true}
                  src={services3}
                  alt={'picture of author'}
                />
              </Box>
              <Box
                sx={{
                  padding: '30px',
                  bgcolor: 'black'
                }}
              >
                <Typography
                  variant={'h3'}
                  textTransform={'uppercase'}
                  fontWeight={theme.typography.fontWeightMedium}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  CẮT TÓC
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant={'body1'}
                >
                  Tại Dickies, chúng tôi không chỉ đơn thuần là dịch vụ cắt tóc mà còn mang đến chất lượng phục vụ vượt trội, giúp khách hàng có một trải nghiệm tuyệt vời từ đầu đến cuối. Đội ngũ thợ cắt tóc của chúng tôi không chỉ có tay nghề chuyên nghiệp, kinh nghiệm lâu năm, mà còn luôn cập nhật những xu hướng tóc hot nhất để mang đến cho bạn những mẫu tóc thời thượng, phù hợp với cá tính và phong cách riêng. Chúng tôi cam kết mang đến sự hài lòng và tự tin cho mỗi khách hàng!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}

          >
            <Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%'
                  }}
                  priority={true}
                  src={services}
                  alt={'picture of author'}
                />
              </Box>
              <Box
                sx={{
                  padding: '30px',
                  bgcolor: 'black'
                }}
              >
                <Typography
                  variant={'h3'}
                  textTransform={'uppercase'}
                  fontWeight={theme.typography.fontWeightMedium}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  THƯ GIÃN
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant={'body1'}
                >
                  Bạn đã thử các dịch vụ thư giãn tại Dickies chưa? Ngoài việc cắt tóc và làm hóa chất tóc, những liệu trình thư giãn tại đây chắc chắn sẽ mang đến cho bạn một trải nghiệm khó quên. Đừng ngần ngại, vì một khi đã thử, bạn sẽ khó lòng bỏ qua được! Các combo thư giãn của chúng tôi không chỉ giúp bạn thư thái, giải tỏa căng thẳng mà còn có mức giá cực kỳ ưu đãi, mang đến giá trị vượt trội cho mỗi lần trải nghiệm. Hãy đến và tận hưởng sự khác biệt tại Dickies!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%'
                  }}
                  priority={true}
                  src={services2}
                  alt={'picture of author'}
                />
              </Box>
              <Box
                sx={{
                  padding: '30px',
                  bgcolor: 'black'
                }}
              >
                <Typography
                  variant={'h3'}
                  textTransform={'uppercase'}
                  fontWeight={theme.typography.fontWeightMedium}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  HÓA CHẤT
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant={'body1'}
                >
                  Nếu tóc bạn đang gặp phải tình trạng bung chỉa, khó vào nếp, quá xẹp thiếu độ phồng, hay bạn quá lười tạo kiểu mỗi lần đi chơi, hoặc đơn giản là cảm thấy chán với màu tóc tự nhiên, thì giải pháp nhanh chóng và hiệu quả nhất chính là làm hóa chất. Tại Dickies, chúng tôi có thể giúp bạn xử lý mọi vấn đề tóc một cách dễ dàng: tóc bung thì sẽ được ép vào form, tóc xẹp sẽ được uốn phồng, tạo kiểu ruffled, wavy, curly… Thêm vào đó, nếu bạn cảm thấy nhàm chán với màu tóc hiện tại, hãy thử tẩy và nhuộm các màu hot trend như nâu trà sữa, xám khói, khói bạc, xanh đen hay tím sữa để làm mới bản thân. Chắc chắn bạn sẽ hài lòng với diện mạo mới!
                </Typography>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OurServices
