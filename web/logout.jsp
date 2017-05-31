<%
session.setAttribute("userid", null);
session.invalidate();
response.sendRedirect("index_1.jsp");
%>