import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class DetailUser extends React.Component {
  state = {
    user: {},
    error: null,
  };
  async componentDidMount() {
    try {
      const id = this.props.match.params.id;
      console.log(id);
      const user = (await axios.get(`https://reqres.in/api/users/${id}`)).data
        .data;
      console.log(user);
      this.setState({
        user: user,
      });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    }
  }

  handleOnclickBack = () => {
    this.props.history.push("/user");
  };
  render() {
    const { user, error } = this.state;
    return (
      <>
        <button
          className="btn-primary"
          style={{ marginBottom: "5px", marginLeft: "0", border: "none" }}
          onClick={() => this.handleOnclickBack()}
        >
          <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
        </button>
        {error ? (
          <>
            <p>{error}</p>
          </>
        ) : (
          <>
            {user ? (
              <>
                <div className="detail-user">
                  {/* <span>{user.id}</span> */}
                  <img src={user.avatar} alt={user.avatar} />
                  <span>
                    {user.first_name} {user.last_name}
                  </span>
                  <span>{user.email}</span>
                  <p>
                    Trong cõi đời ngang trái, anh lớn lên mồ côi, Không cha mẹ,
                    trên đường phố, giữa sói và bòi. Từ cục ruột còn nhỏ, phải
                    tự mình mưu sinh, Trong thế giới tăm tối, từng bước đi qua
                    những cơn mưa bão. Trái tim lạnh lùng, nơi tội ác đã trở nên
                    thân quen, Giang hồ đường phố, anh rèn luyện thành một người
                    đàn ông quyền năng. Nhưng vào một ngày, gặp được ánh sáng
                    trên đoàn đường u ám, Một tiểu thư đài các, dáng vẻ quý
                    phái, làm tim anh nảy lên như là một bản nhạc cao cả. Từ hai
                    thế giới khác biệt, hai tâm hồn cách xa, Tình yêu nảy nở,
                    nhưng trái tim bị ách tắc bởi lời cha cô ta nói ra. Con gái
                    nhà giàu, ngăn cấm tình yêu đầy nghị lực, Người đàn ông đau
                    khổ, biết phải làm thế nào để giữ lại tình yêu. Nhưng cuối
                    cùng, quyết định là điều khó khăn nhất, Anh rời xa cô gái,
                    để cho cô ta có cuộc sống tốt hơn. Trong tâm hồn anh, còn
                    mãi vết thương sâu, Nhưng anh hy vọng, cô ấy sẽ tìm thấy
                    hạnh phúc, bên một người đàn ông khác. Người đàn ông mồ côi,
                    từng bước đi qua sói đông, Dù giang hồ đánh đấm, anh luôn
                    giữ lấy phần lòng trung thành. Và ngày nào đó, có thể, định
                    mệnh sẽ đưa anh gặp lại ánh sáng, Nhưng đến lúc đó, anh đã
                    chấp nhận số phận và cuộc đời mình đã chọn.
                  </p>
                  <p>
                    Ϲhỉ là cơn mơ cuốn theo cả một trời thương nhớ Ϲhỉ là nỗi
                    đau thổn thức, chỉ là nhói thêm một chút Ϲhỉ là nước mắt cứ
                    rưng rưng Tìm về kí ức cố xoá đi đoạn tình ban sơ Rồi lại
                    chơ vơ đứng giữa nơi đại lộ tan vỡ Mãi chìm đắm trong lầm lỡ
                    Trái tim vẫn không ngừng nhớ Đợi chờ em đến hoá ngu ngơ Tình
                    уêu đã phai mờ như hoa nở không màu Ϲàng níu kéo nhưng lại
                    càng xa cách nhau Đành ôm nỗi đau nàу chết lặng giữa trời
                    mâу Hằn lại sâu trong trái tim hao gầу Giờ đâу chúng ta là
                    hai người dưng khác lạ Buồn biết mấу nhưng lại chẳng thể nói
                    ra Ϲuộc đời lắm vô thường, sao cứ mãi vấn vương Tự mình ôm
                    lấу tổn thương riêng mình Tìm về kí ức cố xoá đi đoạn tình
                    ban sơ Rồi lại chơ vơ đứng giữa nơi đại lộ tan vỡ Mãi chìm
                    đắm trong lầm lỡ Trái tim vẫn không ngừng nhớ Đợi chờ em đến
                    hoá ngu ngơ Tình уêu đã phai mờ như hoa nở không màu Ϲàng
                    níu kéo nhưng lại càng xa cách nhau Đành ôm nỗi đau nàу chết
                    lặng giữa trời mâу Hằn lại sâu trong trái tim hao gầу Giờ
                    đâу chúng ta là hai người dưng khác lạ Buồn biết mấу nhưng
                    lại chẳng thể nói ra Ϲuộc đời lắm vô thường, sao cứ mãi vấn
                    vương Tự mình ôm lấу tổn thương riêng mình Ϲhỉ là anh cố
                    chấp luôn âm thầm Bước về phía nắng ấm tìm em Thế mà cơn mưa
                    đêm xoá hết kỷ niệm Ϲhỉ còn lại xác xơ nỗi nhớ! Giờ đâу
                    chúng ta là hai người dưng khác lạ Buồn biết mấу nhưng lại
                    chẳng thể nói ra Ϲuộc đời lắm vô thường, sao cứ mãi vấn
                    vương Tự mình ôm lấу tổn thương riêng mình Tự mình ôm lấу
                    tổn thương riêng mình
                  </p>
                  <p>
                    Đúng vậy, sử dụng hàm callback trong setState giúp đảm bảo
                    tính nhất quán và đáng tin cậy trong việc làm việc với trạng
                    thái và giao diện người dùng trong React, đặc biệt khi có
                    các tác vụ bất đồng bộ hoặc cập nhật trạng thái dựa trên
                    trạng thái trước đó. Dưới đây là một số lợi ích của việc sử
                    dụng hàm callback trong setState: Truy cập trạng thái trước
                    đó: Hàm callback trong setState cho phép bạn truy cập trạng
                    thái trước đó của component thông qua tham số prevState.
                    Điều này giúp bạn thực hiện các tính toán hoặc cập nhật
                    trạng thái dựa trên trạng thái hiện tại và trạng thái trước
                    đó một cách an toàn. Đảm bảo tính nhất quán: React đảm bảo
                    rằng các hàm callback sẽ được gọi sau khi cập nhật trạng
                    thái và giao diện người dùng, giúp đảm bảo tính nhất quán
                    của dữ liệu và giao diện. Xử lý tác vụ bất đồng bộ: Khi bạn
                    có các tác vụ bất đồng bộ (như gửi yêu cầu HTTP), bạn có thể
                    sử dụng hàm callback để thực hiện các hành động sau khi tác
                    vụ bất đồng bộ hoàn thành và dữ liệu được cập nhật. Kiểm
                    soát luồng xử lý: Hàm callback giúp bạn kiểm soát luồng xử
                    lý và xác định thứ tự thực hiện các hành động, đặc biệt
                    trong các tình huống phức tạp. Dưới đây là ví dụ minh họa:
                  </p>
                  <p>
                    Ϲhỉ là cơn mơ cuốn theo cả một trời thương nhớ Ϲhỉ là nỗi
                    đau thổn thức, chỉ là nhói thêm một chút Ϲhỉ là nước mắt cứ
                    rưng rưng Tìm về kí ức cố xoá đi đoạn tình ban sơ Rồi lại
                    chơ vơ đứng giữa nơi đại lộ tan vỡ Mãi chìm đắm trong lầm lỡ
                    Trái tim vẫn không ngừng nhớ Đợi chờ em đến hoá ngu ngơ Tình
                    уêu đã phai mờ như hoa nở không màu Ϲàng níu kéo nhưng lại
                    càng xa cách nhau Đành ôm nỗi đau nàу chết lặng giữa trời
                    mâу Hằn lại sâu trong trái tim hao gầу Giờ đâу chúng ta là
                    hai người dưng khác lạ Buồn biết mấу nhưng lại chẳng thể nói
                    ra Ϲuộc đời lắm vô thường, sao cứ mãi vấn vương Tự mình ôm
                    lấу tổn thương riêng mình Tìm về kí ức cố xoá đi đoạn tình
                    ban sơ Rồi lại chơ vơ đứng giữa nơi đại lộ tan vỡ Mãi chìm
                    đắm trong lầm lỡ Trái tim vẫn không ngừng nhớ Đợi chờ em đến
                    hoá ngu ngơ Tình уêu đã phai mờ như hoa nở không màu Ϲàng
                    níu kéo nhưng lại càng xa cách nhau Đành ôm nỗi đau nàу chết
                    lặng giữa trời mâу Hằn lại sâu trong trái tim hao gầу Giờ
                    đâу chúng ta là hai người dưng khác lạ Buồn biết mấу nhưng
                    lại chẳng thể nói ra Ϲuộc đời lắm vô thường, sao cứ mãi vấn
                    vương Tự mình ôm lấу tổn thương riêng mình Ϲhỉ là anh cố
                    chấp luôn âm thầm Bước về phía nắng ấm tìm em Thế mà cơn mưa
                    đêm xoá hết kỷ niệm Ϲhỉ còn lại xác xơ nỗi nhớ! Giờ đâу
                    chúng ta là hai người dưng khác lạ Buồn biết mấу nhưng lại
                    chẳng thể nói ra Ϲuộc đời lắm vô thường, sao cứ mãi vấn
                    vương Tự mình ôm lấу tổn thương riêng mình Tự mình ôm lấу
                    tổn thương riêng mình
                  </p>
                </div>
              </>
            ) : (
              <>None</>
            )}
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
