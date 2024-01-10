import * as SC from "./LinkLIst.stuled";

export default function LinkList() {
  return (
    <SC.List>
      <SC.Item>
        <SC.Link>Посилання на курс</SC.Link>
      </SC.Item>
      <SC.Item>
        <SC.Link>Онлайн запис</SC.Link>
      </SC.Item>
      <SC.Item>
        <SC.Link>Телеграм</SC.Link>
      </SC.Item>
      <SC.Item>
        <SC.Link>Інстаграм</SC.Link>
      </SC.Item>
    </SC.List>
  );
}
