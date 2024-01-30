import {getTokenByMemberRefId} from "@/utils/authHelper";
import {useStore} from "vuex";

export default function (to, from, next) {
  const store = useStore();
  const storeMemberRefId = store.getters.getMemberRefId;

  const isAuthenticated = getTokenByMemberRefId(storeMemberRefId);

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
  else next();
}
