import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <p>Email: {user?.email}</p>

      <p>Role: {user?.role}</p>

      <hr />

      <h3>Complaint Management</h3>

      <button>
        View All Complaints
      </button>

      <button>
        Assign Complaints
      </button>

      <button>
        Analytics
      </button>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;