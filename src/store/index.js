import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
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
    
*/
