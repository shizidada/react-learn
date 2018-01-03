import React from "react";
import { Spin } from 'antd';

import style from "./style";

const Loading = () => {
	return (
		<div className={style.loading}>
			<Spin />
		</div>
	)
}

export default Loading;