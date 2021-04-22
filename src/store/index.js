import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showPostScreen: null,
    post: "",
    showPost: false,
    postArray: [],
    index: -1,
  },
  mutations: {},
  actions: {},
  modules: {},
});
/*
    State
    Single State Tree
    Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the 
    "single source of truth." This also means usually you will have only one store for each application. 
    A single state tree makes it straightforward to locate a specific piece of state, 
    and allows us to easily take snapshots of the current app state for debugging purposes.
*/

/*
    Getters:
    Vuex allows us to define "getters" in the store. You can think of them as computed properties for stores. Like computed properties, 
    a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.
*/

/*
    Ham mui ten, ham rut gon javascript

    // Hàm truyền thống
    function (a){
    return a + 100;
    }

    a => a + 100;

    nếu bạn có nhiều đối số hoặc không có đối số, bạn cần phải thêm dấu ngoặc tròn vào xung quanh các đối số:
    (a, b) => a + b + 100;
    () => a + b + 100;
    
    Tương tự như vậy, nếu nội dung (body) hàm cần thêm nhiều dòng để xử lý thì bạn cần thêm vào dấu ngoặc nhọn 
    CỘNG thêm "return" (hàm mũi tên không có kỳ diệu đến mức biết khi nào bạn muốn "return"):
    (a, b) => {
    let chuck = 42;
    return a + b + chuck;
    }

    Và cuối cùng, với các hàm được đặt tên chúng tôi xử lý các biểu thức mũi tên như các biến
    let bob = a => a + 100;

    *luu y
    Hàm rút gọn không định nghĩa ("ràng buộc") this của hàm
    Hàm rút gọn không thể dùng như phương thức khởi tạo và sẽ báo lỗi nếu dùng toán tử new.
    Hàm rút gọn không có thuộc tính prototype.
    Từ khoá yield có thể sẽ không dùng được trong thân hàm rút gọn (trừ khi được gọi trong hàm lồng trong hàm rút gọn).
    Trong concise body, chỉ cần biểu thức, return sẽ được gán ngầm. Còn với block body, bạn phải có return.
    var func = x => x * x;
    var func = (x, y) => { return x + y; };
    Không thể dùng cú pháp params => {object:literal} nếu muốn trả về object literal.
    var func = () => { foo: 1 };
    var func = () => { foo: function() {} };
    Thế nên hãy bao object literal trong ngoặc tròn.
    var func = () => ({foo: 1});
    
    Hàm rút gọn không thể chứa bất cứ kí tự rút gọn nào giữa phần truyền tham số và dấu mũi tên.
*/

/*
    Mutation
    The only way to actually change state in a Vuex store is by committing a mutation. 
    Vuex mutations are very similar to events: each mutation has a string type and a handler. 
    The handler function is where we perform actual state modifications, and it will receive the state as the first argument:
    const store = new Vuex.Store({
        state: {
            count: 1
        },
        mutations: {
            increment (state) {
            // mutate state
            state.count++
            }
        }
    })

    You cannot directly call a mutation handler. Think of it more like event registration: 
    "When a mutation with type increment is triggered, call this handler." To invoke a mutation handler, you need to call store.commit with its type:
    
    store.commit('increment')

    commit with Payload
    You can pass an additional argument to store.commit, which is called the payload for the mutation:
    store.commit('increment', 10)

    An alternative way to commit a mutation is by directly using an object that has a type property:

    store.commit({
        type: 'increment',
        amount: 10
    })

    When adding new properties to an Object, you should either:
    Use Vue.set(obj, 'newProp', 123), or

    Replace that Object with a fresh one. For example, using the object spread syntax (opens new window)we can write it like this:
    state.obj = { ...state.obj, newProp: 123 }
    
    You can commit mutations in components with this.$store.commit('xxx'), 
    or use the mapMutations helper which maps component methods to store.commit calls (requires root store injection) 
*/

/*
    Actions
    
*/

/*
    Object
    
    Trong JavaScript, một object là một thực thể độc lập, với thuộc tính và kiểu.

    Objects and thuoc tinh

    Giống như những biến JavaScript, cả tên của object (có thể được xem như là 1 biến thông thường) và tên thuộc tính thì cũng phân biệt hoa thường
    Bạn có thể định nghĩa một thuộc tính bằng cách gán giá trị cho nó. Ví dụ hãy tạo đối tượng myCar và gắn thuộc tính cho nó như make, model, and year như sau:
    var myCar = new Object();
    myCar.make = 'Ford';
    myCar.model = 'Mustang';
    myCar.year = 1969;

    Thuộc tính của JavaScript object có thể được truy xuất hoặc thiết lập bằng cách dùng dấu ngoặc vuông.
    Objects thỉnh thoảng cũng được gọi là mảng liên kết, vì mỗi thuộc tính được 
    liên kết với một giá trị kiểu chuỗi mà có thể được dùng để truy xuất thuộc tính đó. 
    Ví dụ bạn có thể truy xuất những thuộc tính của myCar object như sau:
    myCar['make'] = 'Ford';
    myCar['model'] = 'Mustang';
    myCar['year'] = 1969;

    Tên thuộc tính của một object có thế là chuỗi ký tự hợp lệ bất kỳ, hoặc bất kỳ thứ gì có thể chuyển đổi được thành chuỗi, bao gồm cả chuỗi rỗng. 
     Tuy nhiên, bất kỳ tên thuộc tính nào mà không phải là 1 định danh hợp lệ trong JavaScript 
     (ví dụ, một thuộc tính mà tên có khoảng trắng hoặc gạch ngang, hoặc bắt đầu bằng số) chỉ có thể truy xuất bằng cách dùng dấu ngoặc vuông []. 
     Ký pháp này cũng rất hữu dụng khi tên thuộc tính được xác định động (khi tên thuộc tính chỉ được xác định lúc thực thi). Như trong ví dụ sau:
     // Khởi tạo 4 biến và gán giá trị cho chúng trên cùng một dòng lệnh
    // phân cách bởi dấu ","
    var myObj = new Object(),
        str = 'myString',
        rand = Math.random(),
        obj = new Object();

    myObj.type              = 'Dot syntax';
    myObj['date created']   = 'String with space';
    myObj[str]              = 'String value';
    myObj[rand]             = 'Random Number';
    myObj[obj]              = 'Object';
    myObj['']               = 'Even an empty string';

    console.log(myObj);

    Chú ý tất cả biểu thức được làm khóa trong dấu ngoặc vuông đều được chuyển đổi thành kiểu chuỗi, 
    bởi vì objects trong JavaScript chỉ chấp nhận khóa là kiểu chuỗi. 
    Ví dụ trong đoạn mã trên khi khóa obj được thêm vào myObj, JavaScript sẻ gọi phương thức obj.toString(), và lấy kết quả đó làm khóa.

    Bạn cũng có thể truy xuất thuộc tính bằng cách dùng giá trị chuỗi mà nó được lưu trong một biến:
    var propertyName = 'make';
    myCar[propertyName] = 'Ford';

    propertyName = 'model';
    myCar[propertyName] = 'Mustang';

    Bạn có thể sử dụng dấu ngoặc vuông với for...in để duyệt qua tất cả thuộc tính có thể đếm của object. Để minh họa cách nó hoạt động, hãy xem xét hàm sau đây, nó sẽ hiển thị những thuộc tính của đối tượng dựa vào 2 đối số gồm đối tượng (obj) và tên (objName) của đối tượng truyền vào cho hàm:

    function showProps(obj, objName) {
    var result = '';
    for (var i in obj) {
        // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        if (obj.hasOwnProperty(i)) {
        result += objName + '.' + i + ' = ' + obj[i] + '\n';
        }
    }
    return result;
    }

    Như vậy, khi ta gọi showProps(myCar, "myCar") thì kết quả được trả về như sau:

    myCar.make = Ford
    myCar.model = Mustang
    myCar.year = 1969
*/

//////////////////////////////////////////////////////////////////////////

/*
    DISPATCH and COMMIT in Vuex
    
*/
