import React from "react";
import { Alert, Spin } from "antd";

const PageProvider = ({ error, loading, children }) => {
  const renderError = () => {
    return <Alert message="Error" description={error} type="error" showIcon />;
  };

  return (
    <>
      {loading ? (
        <div className="spiner_loading">
          <Spin tip="Загрузка..." size="large">
            <div className="content" />
          </Spin>
        </div>
      ) : error ? (
        renderError()
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default PageProvider;
